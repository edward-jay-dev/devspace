// localhost:3000/demo
"use client";

import { Button } from "@/components/ui/button";

export default function DemoPage() {
    const handleBlocking = async () => {
        const response = await fetch("/api/demo/blocking", {
            method: "POST",
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="p-8 space-x-4">
            <Button onClick={handleBlocking}>
                Blocking
            </Button>
        </div>
    );
};