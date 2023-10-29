import { Heading, Text , Image,ScrollView } from "native-base";
import { Header } from "../components";


const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true"/>
      
      <ScrollView>
      <Image source={{ uri: params.image }}
        w="full"
        alt="Imageku"
        h="250"
      />
        <Text p={"4"}>{params.date}</Text>
        <Heading p={"4"}>{params.title}</Heading>
        <Text p={"4"}>{params.content}</Text>
      </ScrollView>
      
    </>
  );
};

export default NewsDetail;
