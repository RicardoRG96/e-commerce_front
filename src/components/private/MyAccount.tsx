import MyAccountLayout from "./MyAccountLayout";
import PersonalInfo from "./PersonalInfo";

const MyAccount: React.FC = () => {
    return (
        <MyAccountLayout children={<PersonalInfo />}/>
    )
}

export default MyAccount;