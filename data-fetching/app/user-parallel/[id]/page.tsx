type Post={
    userId: number;
    id:number;
    title:string;
    body:string;
};

type Album={
    userId: number;
    id:number;
    title: string;
}

async function getUserPosts(userId:string){
    await new Promise((resolve)=> setTimeout(resolve,1000));
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json();
}

async function getUserAlbums(userId:string){
    await new Promise((resolve)=> setTimeout(resolve,1000));
    const res=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return res.json();
}

export default async function UserProfile({params}:{params: Promise<{id:string}>}){
    const {id}=await params
    const postsData=getUserPosts(id)
    const albumsData=getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);

    return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">User Profile - ID: {id}</h1>

      {/* POSTS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALBUMS SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <h3 className="font-bold text-lg">{album.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}