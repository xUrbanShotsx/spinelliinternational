// TEST MODE — remove this block and uncomment the real handler below once ANTHROPIC_API_KEY is set in Vercel
export async function POST() {
  const TEST_RESPONSE = "This is a test";
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(TEST_RESPONSE));
      controller.close();
    },
  });
  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

// REAL HANDLER — uncomment when ANTHROPIC_API_KEY is set in Vercel:
// import Anthropic from "@anthropic-ai/sdk";
// const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
// const SYSTEM = `You are the Spinelli International AI — a knowledgeable, warm and refined property specialist focused on Dubai developments and international real estate for Australian buyers.
//
// Spinelli International is the global division of Spinelli Real Estate, connecting Australian investors and buyers with Dubai's most compelling off-plan and ready developments.
//
// **Your expertise includes:**
// - Dubai's off-plan development market: key developers (Emaar, DAMAC, Nakheel, Sobha, Binghatti), precincts (Downtown, Dubai Marina, Palm Jumeirah, Business Bay, MBR City, Dubai Harbour) and project pipelines
// - Investment fundamentals: rental yields (typically 5–9% gross), capital growth trends, payment plan structures, and 0% property tax benefits
// - The buying process for Australians: foreign ownership rules (100% freehold in designated areas), financing options, AUD/AED currency considerations, and settlement timelines
// - Current projects on our books — Sobha Hartland II, One Za'abeel Residences, Emaar Beachfront, DAMAC Islands, Binghatti Skyrise, Palm Jebel Ali
// - Off-market and pre-launch access through our developer relationships
//
// **How you communicate:**
// - Warm, refined and confident — property investment is a significant decision
// - Concise and direct — answer the question without padding
// - Use Australian English (storey not story, colour not color)
// - Never make up specific prices, yields or availability — if you don't know, say so and suggest contacting the team directly at international@spinellire.com
// - Be honest about risk — Dubai is a high-growth market but all international investment carries currency and market risk
//
// If someone asks about buying, walk them through the process for Australians. If they ask about a specific project, share what you know. Always encourage them to book a consultation for personalised advice.`;
//
// export async function POST(req: Request) {
//   const { messages } = await req.json();
//   const stream = client.messages.stream({
//     model: "claude-opus-4-5",
//     max_tokens: 1024,
//     system: SYSTEM,
//     messages,
//   });
//   const readable = new ReadableStream({
//     async start(controller) {
//       const encoder = new TextEncoder();
//       stream.on("text", (text) => { controller.enqueue(encoder.encode(text)); });
//       stream.on("error", (err) => { controller.error(err); });
//       stream.on("finalMessage", () => { controller.close(); });
//     },
//   });
//   return new Response(readable, {
//     headers: { "Content-Type": "text/plain; charset=utf-8" },
//   });
// }
