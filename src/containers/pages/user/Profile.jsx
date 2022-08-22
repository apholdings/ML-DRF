import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import {useParams} from 'react-router-dom'
import { useEffect } from "react";
import { get_user_details } from "redux/actions/user";
import { MailIcon, PhoneIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import LoadingFullWidth from "components/loaders/LoadingFullWidth";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { setAlert } from "redux/actions/alert";

const profile = {
    name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    backgroundImage:
        "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    fields: [
        ["Phone", "(555) 123-4567"],
        ["Email", "ricardocooper@example.com"],
        ["Title", "Senior Front-End Developer"],
        ["Team", "Product Development"],
        ["Location", "San Francisco"],
        ["Sits", "Oasis, 4th floor"],
        ["Salary", "$145,000"],
        ["Birthday", "June 8, 1990"],
    ],
};

function Profile({ get_user_details, user, setAlert }) {
    const params = useParams();
    const user_account = params.user_account;

    useEffect(() => {
        const fetchData = async () => {
            await get_user_details(user_account);
        };
        fetchData();
    }, []);

    return (
        <FullWidthLayout>
            <div>
                <div className="z-10">
                    {user ? (
                        <img
                            className="h-32 w-full object-cover lg:h-48"
                            src={user && user.banner}
                            alt=""
                        />
                    ) : (
                        <LoadingFullWidth />
                    )}
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                            {user ? (
                                <img
                                    className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-dark-third sm:h-32 sm:w-32"
                                    src={user && user.picture}
                                    alt=""
                                />
                            ) : (
                                <div className="animate-pulse">
                                    <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-third">
                                        <svg
                                            className="h-full w-full text-gray-300 dark:text-dark-third dark:bg-dark-main"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                    {user ? (
                                        <>
                                            {user.username === user.account ? (
                                                <>
                                                    {user &&
                                                        user.account.slice(
                                                            0,
                                                            6
                                                        )}
                                                    ...
                                                    {user &&
                                                        user.account.slice(-4)}
                                                </>
                                            ) : (
                                                <>{user && user.username}</>
                                            )}
                                        </>
                                    ) : (
                                        <LoadingFullWidth />
                                    )}
                                    {user && user.verified ? (
                                        <BadgeCheckIcon
                                            className="ml-2 h-4 w-4 text-blue-500 inline-flex"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </h1>
                                <p className="text-sm font-gilroy-medium text-gray-500">
                                    Account: {user && user.account.slice(0, 6)}
                                    ...{user && user.account.slice(-4)}
                                    <CopyToClipboard
                                        text={user && user.account}
                                    >
                                        <button
                                            onClick={() => {
                                                setAlert("Copiado", "green");
                                            }}
                                            className="ml-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-500 hover:text-gray-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                />
                                            </svg>
                                        </button>
                                    </CopyToClipboard>
                                </p>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
                        </div>
                    </div>

                    <div className="mt-8 dark:text-dark-txt text-gray-700 font-gilroy-regular">
                        {user && user.profile_info}
                    </div>

                    <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                            {user ? (
                                <>
                                    {user.username === user.account ? (
                                        <>
                                            {user && user.account.slice(0, 6)}
                                            ...
                                            {user && user.account.slice(-4)}
                                        </>
                                    ) : (
                                        <>{user && user.username}</>
                                    )}
                                </>
                            ) : (
                                <LoadingFullWidth />
                            )}
                            {user && user.verified ? (
                                <BadgeCheckIcon
                                    className="ml-2 h-4 w-4 text-blue-500 inline-flex"
                                    aria-hidden="true"
                                />
                            ) : (
                                <></>
                            )}
                        </h1>
                        <p className="text-sm font-gilroy-medium text-gray-500">
                            Account: {user && user.account.slice(0, 6)}...
                            {user && user.account.slice(-4)}
                            <CopyToClipboard text={user && user.account}>
                                <button
                                    onClick={() => {
                                        setAlert("Copiado", "green");
                                    }}
                                    className="ml-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500 hover:text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                        />
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </p>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}

const mapStateToProps=state=>({
user: state.user.user
})

export default connect(mapStateToProps, {
    get_user_details,
    setAlert,
})(Profile);