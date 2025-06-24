---
layout: "@/layouts/Layout.astro"
---
# Hello World!

1. 안녕
1. 하세요

```astro
---
import "../styles/global.css";
---
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>아스트로 시작</title>
	</head>
	<body>
		<slot />
	</body>
</html>
```

| 항목         | React      | Vue     | Svelte | Astro |
| ---------- | ---------- | ------- | ------ | ----- |
| 런타임 크기     | 큼          | 중간      | 작음     | 매우 작음 |
| 학습 곡선      | 중\~높음      | 낮음      | 중간     | 낮음    |
| 성능         | 중간         | 중간      | 높음     | 매우 높음 |
| 생태계        | 매우 큼       | 큼       | 작음     | 작음    |
| 정적 사이트     | Next.js 필요 | Nuxt 필요 | 비효율적   | 최적화됨  |
| 동적 SPA     | 최적화        | 최적화     | 가능     | 부적합   |
| TypeScript | 매우 좋음      | 좋아짐     | 기본 지원  | 좋음    |