// localhost:3000/demo
"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function DemoPage() {
    const [loading, setLoading] = React.useState(false);
    const [loading2, setLoading2] = React.useState(false);
    
    const handleBlocking = async () => {
        setLoading(true);
        await fetch("/api/demo/blocking", {
            method: "POST",
        });
        setLoading(false);
    }

    const handleBackground = async () => {
        setLoading(true);
        await fetch("/api/demo/background", {
            method: "POST",
        });
        setLoading(false);
    }

    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBlocking}>
                { loading ? "loading..." : "Blocking" }
            </Button>
            <Button disabled={loading2} onClick={handleBackground}>
                { loading2 ? "loading..." : "Background" }
            </Button>
        </div>
    );
};