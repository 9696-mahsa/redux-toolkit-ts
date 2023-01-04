// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise<{ data: number }>((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }


export async function fetchPosts() {
  let res : any= [];
  await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => res = json)

      console.log('mm 600')
      console.log(res)
  return new Promise<{ data: any }>((resolve) =>
    resolve({ data: res })
  );
}
