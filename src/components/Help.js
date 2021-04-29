import useFetchData from "../hooks/useFetchData";

const Help = () => {
  const helpTemplate = useFetchData("/help");
  return <div dangerouslySetInnerHTML={{ __html: helpTemplate.data }}></div>;
};

export default Help;
