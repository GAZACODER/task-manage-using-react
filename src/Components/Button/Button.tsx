import { Button as AntButon, ButtonProps} from 'antd';



interface IButton extends ButtonProps{
  title?: string;
}
const ButtonComp: React.FC<IButton> = ({title, ...props}) => (
  <>
    <AntButon type="primary">
      {title}
    </AntButon>

  </>
);

export default ButtonComp;