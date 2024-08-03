<header>
    <nav>
        <div class="logo">NF</div>

        <ul class="navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Job Listings</a></li>
            <li><a href="/companies">Companies</a></li>
        </ul>
    </nav>
</header>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid white;
        margin-bottom: 1rem;
    }

    .logo {
        font-size: 2rem;
        color: white;
        font-weight: bolder;
    }

    .navLinks {
        display: flex;
        list-style: none;
    }

    .navLinks li {
        margin-right: 1rem;
    }

    .navLinks a {
        text-decoration: none;
        color: white;
    }

    .navLinks a:hover {
        text-decoration: underline;
        color: green;
    }

</style>