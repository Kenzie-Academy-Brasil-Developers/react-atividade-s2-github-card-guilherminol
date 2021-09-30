import { CardImage, Card, CardInfo, List } from "./style";
const APIRender = ({ apiSearch }) => {
  console.log(apiSearch);
  return (
    <List>
      {apiSearch.map((item, key) => {
        return (
          <Card key={key}>
            <CardImage src="https://img.icons8.com/plumpy/384/github.png"></CardImage>
            <CardInfo>
              <h2>Nome: {item.name}</h2>
              <p> Número de Forks: {item.forks}</p>
              <a href={item.url}>Link do repositório</a>
            </CardInfo>
          </Card>
        );
      })}
    </List>
  );
};
export default APIRender;
