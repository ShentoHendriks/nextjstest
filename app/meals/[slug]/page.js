import Link from "next/link"

export default function mealsBlogPage() {
    return (
        <main>
            <h1>This is a blog page of meals</h1>
            <p><Link href="/meals">Random</Link></p>
        </main>
    )
}