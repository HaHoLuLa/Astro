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

| 안녕 | 세상아 |
| -- | -- |
| ㅁ | ㅁ |