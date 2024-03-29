import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// Internal
import { preprocessor } from "$internal/preprocessor";

// Types
import type { PreprocessorGroup } from "svelte/compiler";
import type { PaperfeelOptions } from "$internal/preprocessor";

export type {
    PaperfeelOptions
};

/**
    Paperfeel preprocessor for SvelteKit.
*/
export const paperfeel = (options?: PaperfeelOptions): PreprocessorGroup[] => [
    preprocessor(options),
    vitePreprocess(options?.svelte)
];