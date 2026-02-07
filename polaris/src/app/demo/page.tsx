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
        setLoading2(false);
    }

    const handleClientError = () => {
        throw new Error("Client error: Something went wrong on the client!");
    };

    const handleApiError = async () => {
        await fetch("/api/demo/error", { method: "POST" });
    };

    const handleIngestError = async () => {
        await fetch("/api/demo/inngest-error", { method: "POST" });
    };

    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBlocking}>
                { loading ? "loading..." : "Blocking" }
            </Button>
            <Button disabled={loading2} onClick={handleBackground}>
                { loading2 ? "loading..." : "Background" }
            </Button>
            <Button 
                variant="destructive"
                onClick={handleClientError}>
                Client Error
            </Button>
            <Button
                variant="destructive"
                onClick={handleApiError}>
                API Error
            </Button>
            <Button
                variant="destructive"
                onClick={handleIngestError}>
                Ingest Error
            </Button>

        </div>
    );
};