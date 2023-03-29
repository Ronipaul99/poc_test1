
import React, { useEffect, Fragment } from "react";
import { useState } from "react";

const Meeting = ({ payload }) => {
    const [result,setResult] =useState("");

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