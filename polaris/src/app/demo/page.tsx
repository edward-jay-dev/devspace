// localhost:3000/demo
"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function DemoPage() {
    const [loading, setLoading] = React.useState(false);
    
    const handleBlocking = async () => {
        setLoading(true);
        const response = await fetch("/api/demo/blocking", {
            method: "POST",
        });
        setLoading(false);
        // const data = await response.json();
        // console.log(data);
    }
    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBlocking}>
                { loading ? "loading..." : "Blocking" }
            </Button>
        </div>
    );
};