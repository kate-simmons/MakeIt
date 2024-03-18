import Link from "next/link";

export default function LunchPage(){
    return(
        <div>
            <h1>Lunch items</h1>
            <Link href="/"> Go back to homepage</Link>
        </div>
    );
}