import Link from "next/link"

export default function mealsPage() {
    return (
        <main>
            <h1>Meals</h1>
            <p><Link href="/meals/share">Share</Link></p>
            <p><Link href="/meals/random">Random</Link></p>
        </main>
    )
}