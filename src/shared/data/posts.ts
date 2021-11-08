import { IUser } from "./users";

export interface IPost {
  id?: string;
  title: string;
  photo: string;
  comments: IComment[];
  user: IUser;
}

interface IComment {
  id?: string;
  text: string;
  isLiked: boolean;
  user: IUser;
}

export const posts: IPost[] = [
  {
    title: "Por do sol",
    photo:
      "https://s2.glbimg.com/H7rjzaqCQgEyz9ufwSzmYxQfzMA=/0x0:2048x1314/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/4/CpdjQ4SZANm1zQK9rIBw/pordosol.jpg",
    comments: [
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "bianquinha_",
          displayName: "Bianca Zuck",
          avatar_url: "https://randomuser.me/api/portraits/women/65.jpg",
          hasStories: true,
        },
      },
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "bianquinha_",
          displayName: "Bianca Zuck",
          avatar_url: "https://randomuser.me/api/portraits/women/65.jpg",
          hasStories: true,
        },
      },
    ],
    user: {
      name: "pedro_goncalves",
      displayName: "Pedro Gonçalves",
      avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
      hasStories: true,
    },
  },
  {
    title: "fofo <3",
    photo:
      "https://s2.glbimg.com/jR8_5WZCTBqZgZL_HKhkOW_DDKc=/0x0:1119x735/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/N/S/g1ZC5FTqCFVBXuLxG41w/borb.jpg",
    comments: [
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
      {
        text: "dsdasdsadasdasd",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
    ],
    user: {
      name: "bianquinha_",
      displayName: "Bianca Zuck",
      avatar_url: "https://randomuser.me/api/portraits/women/65.jpg",
      hasStories: true,
    },
  },
  {
    title: "Essa viagem foi maravilhosa",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_818262-MLB29271543364_012019-O.jpg",
    comments: [
      {
        text: "Muito bonito",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
      {
        text: "MARAVILHOSO!!",
        isLiked: true,
        user: {
          name: "marcelogate",
          displayName: "Marcelo Gate",
          avatar_url: "https://uifaces.co/our-content/donated/VxDQx_gA.jpg",
          hasStories: true,
        },
      },
      {
        text: "lindoooooooo",
        isLiked: true,
        user: {
          name: "cauaoliveira",
          displayName: "Cauã Oliveira",
          avatar_url: "https://uifaces.co/our-content/donated/vIqzOHXj.jpg",
          hasStories: true,
        },
      },
      {
        text: "VOA MLK 🚀🚀🚀",
        isLiked: true,
        user: {
          name: "pedro_goncalves",
          displayName: "Pedro Gonçalves",
          avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
          hasStories: true,
        },
      },
    ],
    user: {
      name: "bianquinha_",
      displayName: "Bianca Zuck",
      avatar_url: "https://randomuser.me/api/portraits/women/65.jpg",
      hasStories: true,
    },
  },
  {
    title: "DIA MAIS FELIZ DA MINHA VIDA",
    photo:
      "https://www.zankyou.com.br/images/mag-card-c/db8/eee8/878/623/-/br/wp-content/uploads/2017/12/adriano-cardozo.png",
    comments: [
      {
        text: "chorei nesse dia!!",
        isLiked: true,
        user: {
          name: "thamiressouza",
          displayName: "Thamires Souza",
          avatar_url:
            "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
          hasStories: true,
        },
      },
      {
        text: "Muito feliz por ti",
        isLiked: true,
        user: {
          name: "camargowanessa",
          displayName: "Wanessa Camargo",
          avatar_url: "https://randomuser.me/api/portraits/women/79.jpg",
          hasStories: true,
        },
      },
    ],
    user: {
      name: "bianquinha_",
      displayName: "Bianca Zuck",
      avatar_url: "https://randomuser.me/api/portraits/women/65.jpg",
      hasStories: true,
    },
  },
];
