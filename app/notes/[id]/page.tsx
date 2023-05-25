'use client';

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <h1 className='text-xs'>note id: {note.id}</h1>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {note.title}
      </h2>
      <h5 className='font-normal text-gray-700 dark:text-gray-400'>
        {note.content}
      </h5>
      <p className='text-sm'>{note.created}</p>
    </div>
  );
}
