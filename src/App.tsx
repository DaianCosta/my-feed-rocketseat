import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/DaianCosta.png",
      name: "Daian Costa",
      role: "Web/Mobile Developer",
    } as Author,
    content: [
      { type: "paragraph", content: "Fala Galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio portifólio. É um projeto que fiz durante o evento da rocketseat na NLW Return. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ] as Content[],
    publishedAt: new Date("2022-06-07 11:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Maykebrito",
      role: "Educator @Roketseat",
    } as Author,
    content: [
      { type: "paragraph", content: "Faaala Dev 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto na rocketseat para agregar o portifólio de você. É um projeto que fiz para desenvolvermos juntos na NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ] as Content[],
    publishedAt: new Date("2022-06-06 09:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            // se usar o forEach não tem nehum retorno
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ); // map possibilita o retorno
          })}
        </main>
      </div>
    </div>
  );
}
