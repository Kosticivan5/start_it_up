// import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY);

  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  // console.log(JSON.stringify(posts, null, 2));

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       _id: 1,
  //       name: "Elon Musk",
  //     },
  //     _id: 1,
  //     description: "this is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

  return (
    <>
      <section className="green_container">
        <h1 className="heading">
          pitch your startup, <br /> connect with entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search reuslts for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => {
              return <StartupCard key={post?._id} post={post} />;
            })
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
