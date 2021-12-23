const breeds = () => Promise.resolve({
  data: [
    {
      breed_group: 'working',
      name: 'Akita',
      life_span: '10-14 years',
    },
    {
      breed_group: 'Hound',
      name: 'Afghan Hound',
      life_span: '10-13 years',
    },
  ],
});

export default breeds;
