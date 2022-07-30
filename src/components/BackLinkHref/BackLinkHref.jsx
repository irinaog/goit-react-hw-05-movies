import { Back } from "./BackLinkHref.styled";

const BackLinkHref = ({ backLink }) => {
    return (<Back to={backLink}>Back</Back>)
};

export default BackLinkHref;