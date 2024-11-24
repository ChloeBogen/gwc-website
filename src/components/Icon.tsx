interface Props {
  file: string;
}
const Icon = ({ file }: Props) => {
  return (
    <>
      <span className="img-span"></span>
      <img className="icon-align" src={file} />
    </>
  );
};

export default Icon;
