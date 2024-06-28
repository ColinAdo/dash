interface TitleProps {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: TitleProps) => {
  return <h1 className="text-2xl font-semibold">{title}</h1>;
};

export default PageTitle;
