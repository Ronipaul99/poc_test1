
import React, { useEffect, Fragment } from "react";
import { U } from '../../../../Store/User';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { U1 } from "../../../../Store/U-Data";

const Meeting = () => {

    const e = useSelector(U);

    const string1 = "T"
    const string2 = e
    const string3 = "S"
    const string4 = e
    const userData = useSelector(U1)

    const [result, setResult] = useState("");
    // const [role1, setRole] = useState();
    // { string1 == string2 && setRole(1) }
    // { string3 == string4 && setRole(0) }
    // console.log(role1)

    const payload = {
        meetingNumber: 85484827257,
        sdkKey: "_9i2iVs6QnOO4KonvPr2w",
        sdkSecret: "2Z0ZnyvJByRNOjdXKuvVzElBywh4DOdn",
        userName: userData.firstname,
        userEmail: "",
        passWord: "vR2rNR",
        role: 1,
        leaveUrl: "http://localhost:3000/createCourse"
    }


    // console.log(payload)
    fetch('http://localhost:4000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            meetingNumber: payload.meetingNumber,
            role: payload.role
        })
    }).then(res => res.json())
        .then(response => {
            setResult(response.signature)
        }).catch(error => {
            console.error(error)
        })



    useEffect(async () => {
        const { ZoomMtg } = await import("@zoomus/websdk")
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.10.1/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();





        ZoomMtg.generateSDKSignature({
            meetingNumber: payload.meetingNumber,
            role: payload.role,
            sdkKey: payload.sdkKey,
            sdkSecret: payload.sdkSecret,

            success: function (signature) {
                ZoomMtg.init({
                    leaveUrl: payload.leaveUrl,
                    success: function (data) {
                        ZoomMtg.join({
                            meetingNumber: payload.meetingNumber,
                            signature: signature.result,
                            sdkKey: payload.sdkKey,
                            userName: payload.userName,
                            userEmail: payload.userEmail,
                            passWord: payload.passWord,
                            tk: '',
                            success: function () {
                                console.log('--Joined--')
                            },
                            error: function (error) {
                                console.log(error)
                            }
                        })
                    },
                    error: function (error) {
                        console.log(error)
                    }

                })
            },
            error: function (error) {
                console.log(error)
            }
        })

    }, [])

    return (
        <Fragment>
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.10.1/css/bootstrap.css" />
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.10.1/css/react-select.css" />
        </Fragment>
    )
}
export default Meeting;