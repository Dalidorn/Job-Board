<script>
    import NavBar from "../lib/components/NavBar.svelte";
</script>

<body>
    <NavBar />

    <slot></slot>
</body>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: rgb(45, 45, 68);
        height: 100vh;
    }
</style>