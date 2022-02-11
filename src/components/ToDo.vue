<script>
export default {
    data: () => ({
        ToDoData: [],
        InputData: ""
    }),
}
</script>

<template>
    <div>
        <input type="text" v-model="InputData" class="border-2 border-red-500">
        <button @click="ToDoData.push(InputData)">ปุ่ม</button>
    </div>
    <dir>
        <h1>{{ToDoData}}</h1>
    </dir>
</template>
