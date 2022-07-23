import styled from 'styled-components';
type Props = {
  name: string;
  size: number;
  leader: string;
  className?: string;
};

const TeamTemplate = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="wrapper">
        <div>Team: {props.name}</div>
        <div>Size: {props.size} people</div>
        <div>Leader: {props.leader}</div>
      </div>
    </div>
  );
};

const StyledTeamTemplate = styled(TeamTemplate)`
  width: 100%;
  font-size: 2rem;
  
  .wrapper {
    display: flex;
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    
  }
`;

export default StyledTeamTemplate;