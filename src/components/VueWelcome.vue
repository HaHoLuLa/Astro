<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold mb-4">안녕하세요</h1>
        <p class="text-lg text-gray-700 mb-8">오신 것을 환영합니다!</p>
        <a class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" href="/about">
            이동하기
        </a>
    </div>
</template>

<script>
export default {
    name: "Welcome"
};
</script>