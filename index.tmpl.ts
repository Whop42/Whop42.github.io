import type { PageData } from "lume/core.ts";

export const layout = "homepage.njk"

export default function ({ search }: PageData) {
  const posts = search.pages("type=post", "date=desc");
  
  return `
    <ul>
      ${
    posts.map((post) =>
      `<li class="card">
      <h3>
          <a href="${post.data.url}">${post.data.title}</a> <span class="grey">↴</span>
      </h3>
      <h5>${post.data.date}</h5>
      <h5>tags: ${post.data.tags}</h5>
      <p>${post.data.description}</p>
    </li>`
    ).join("")
  }
    </ul>
  `;
}