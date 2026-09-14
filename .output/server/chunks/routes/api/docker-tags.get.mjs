import { a as defineEventHandler, l as getQuery, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

function shouldExcludeTag(tag) {
  const normalized = tag.trim();
  if (!normalized) {
    return true;
  }
  const lower = normalized.toLowerCase();
  return lower === "buildcache" || lower.endsWith(".att") || lower.endsWith(".sig");
}
function normalizeTagList(tags, options = {}) {
  const unique = Array.from(
    new Set(tags.map((tag) => tag.trim()).filter((tag) => tag.length > 0 && !shouldExcludeTag(tag)))
  );
  if (options.includeLatest && !unique.includes("latest")) {
    unique.push("latest");
  }
  if (options.includeSnapshot && !unique.includes("SNAPSHOT")) {
    unique.push("SNAPSHOT");
  }
  return unique;
}

const TAG_CACHE_TTL_MS = 5 * 60 * 1e3;
const tagCache = /* @__PURE__ */ new Map();
const dockerTags_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const repository = String(query.repo || "").trim();
  if (!repository) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing "repo" query parameter.'
    });
  }
  const cached = tagCache.get(repository);
  if (cached && cached.expiresAt > Date.now()) {
    return { tags: cached.tags };
  }
  const [namespace, repo] = repository.split("/");
  if (!namespace || !repo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid repository format. Use "<namespace>/<repo>".'
    });
  }
  try {
    const result = [];
    let nextUrl = `https://hub.docker.com/v2/namespaces/${namespace}/repositories/${repo}/tags?page_size=50&ordering=last_updated`;
    let pageCounter = 0;
    while (nextUrl && pageCounter < 2) {
      const response = await $fetch(nextUrl);
      (response.results || []).forEach((item) => {
        if (item.name && !shouldExcludeTag(item.name)) {
          const updatedAt = item.last_updated ? Date.parse(item.last_updated) : 0;
          result.push({ name: item.name, updatedAt: Number.isFinite(updatedAt) ? updatedAt : 0 });
        }
      });
      nextUrl = response.next || "";
      pageCounter += 1;
    }
    result.sort((a, b) => b.updatedAt - a.updatedAt);
    const tags = normalizeTagList(result.map((item) => item.name));
    tagCache.set(repository, {
      expiresAt: Date.now() + TAG_CACHE_TTL_MS,
      tags
    });
    return { tags };
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: "Could not fetch tags from Docker Hub.",
      data: {
        repository,
        error: error instanceof Error ? error.message : String(error)
      }
    });
  }
});

export { dockerTags_get as default };
//# sourceMappingURL=docker-tags.get.mjs.map
