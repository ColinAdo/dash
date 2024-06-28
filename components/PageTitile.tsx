interface TitleProps {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: TitleProps) => {
  return <h1 className="text-2xl font-semibold w-full">{title}</h1>;
};

export default PageTitle;
