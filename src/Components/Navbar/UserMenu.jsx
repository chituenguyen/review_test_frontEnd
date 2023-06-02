import Avatar from "./Avatar"

const UserMenu = () => {

    return (
        <div className="userMenu">
            <div className="userMenu__name">
                <div className="userMenu__name__above">
                    Handicrafted by
                </div>
                <div className="userMenu__name__under">
                    Jim HLS
                </div>
            </div>
            <Avatar/>
        </div>
    )
}

export default UserMenu