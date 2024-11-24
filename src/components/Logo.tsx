interface Props {
  file: string;
}
const Logo = ({ file }: Props) => {
  return (
    <>
      <span className="img-span"></span>
      <img className="img-align" src={file} width="100%" />
    </>
  );
};

export default Logo;
