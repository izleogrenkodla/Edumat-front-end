export default {
  namespaced: true,
  state: {
    comingBadges: [
      {
        id: 1,
        name: 'Kochany matematyk',
        icon: 'heart',
        description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
        progress: 80,
      },
      {
        id: 2,
        name: 'Vip',
        icon: 'vip',
        description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
        progress: 10,
      },
      {
        id: 3,
        name: 'Król matmy!',
        icon: 'crown',
        description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
        progress: 40,
      },
      {
        id: 4,
        name: 'Pomocny na 5!',
        icon: 'student2',
        description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
        progress: 60,
      },
      {
        id: 5,
        name: 'Pomocny na 5!',
        icon: 'lightning',
        description: 'Udziel 30 odpowiedzi na pytania innych użytkowników.',
        progress: 60,
      },
    ],
    lastQuestions: [
      {
        id: 1,
        time: '2 dni temu',
        date: '21.06.2020',
        author: {
          name: 'Pieseł Piesełowski',
          picture:
            'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        },
        content:
          'Iloczyn wielomianow u(x) =x3-x2+2 i w(x) =x2+2x+5 jest równy:\n A. v(x)=x5+x4+3x3-3x2+7,\nB.v(x)=x5+x4+3x3-3x2+4x+10\nC.v(x)=x6-x4+3x3-3x2+4x+10 \n D.v(x)=x5+x4+3x3-7x2+4x+10',
        topic: {
          name: 'Graniastosłupy',
          image: '/img/math-symbols/całka.svg',
        },
        checked: true,
      },
      {
        id: 2,
        time: '2 dni temu',
        date: '21.06.2020',
        author: {
          name: 'Pieseł Piesełowski',
          picture:
            'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        },
        content:
          'Iloczyn wielomianow u(x) =x3-x2+2 i w(x) =x2+2x+5 jest równy:\nA. v(x)=x5+x4+3x3-3x2+7,\nB.v(x)=x5+x4+3x3-3x2+4x+10\nC.v(x)=x6-x4+3x3-3x2+4x+10 \n D.v(x)=x5+x4+3x3-7x2+4x+10',
        topic: {
          name: 'Graniastosłupy',
          image: '/img/math-symbols/całka.svg',
        },
      },
      {
        id: 3,
        time: '2 dni temu',
        date: '21.06.2020',
        author: {
          name: 'Pieseł Piesełowski',
          picture:
            'https://i.pinimg.com/originals/4f/e7/49/4fe7498b1c04a14f6493504d50251750.jpg',
        },
        content:
          'Iloczyn wielomianow u(x) =x3-x2+2 i w(x) =x2+2x+5 jest równy:\nA. v(x)=x5+x4+3x3-3x2+7,\nB.v(x)=x5+x4+3x3-3x2+4x+10\nC.v(x)=x6-x4+3x3-3x2+4x+10 \n D.v(x)=x5+x4+3x3-7x2+4x+10',
        topic: {
          name: 'Graniastosłupy',
          image: '/img/math-symbols/całka.svg',
        },
      },
    ],
  },
};
