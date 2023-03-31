import React, { useEffect, Fragment } from "react"
import { useSelector } from 'react-redux';
import { U1 } from "../../../../Store/U-Data";

const Meeting = () => {

    const userData = useSelector(U1);

    const payload = {
        meetingNumber: 85484827257,
        passWord: "vR2rNR",
        role: 1,
        sdkKey: "_9i2iVs6QnOO4KonvPr2w",
        sdkSecret: "2Z0ZnyvJByRNOjdXKuvVzElBywh4DOdn",
        userName: userData.firstname,
        userEmail: userData.email,
        leaveUrl: "http://localhost:3000/createCourse"
    }

    console.log(payload);

    useEffect(async () => {
        const { ZoomMtg } = await import("@zoomus/websdk")
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.10.1/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
        ZoomMtg.i18n.load("en-US");
        ZoomMtg.i18n.reload("en-US");


        // Post meetingNumber and Get singnature from backend
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: payload.meetingNumber,
                role: payload.role
            })
        }).then(res => res.json())
            .then(response => {
                startMeeting(response.signature)
            }).catch(error => {
                console.error(error)
            })



        function startMeeting(signature) {

            // document.getElementById("zmmtg-root").style.display = "block";

            ZoomMtg.init({
                leaveUrl: payload.leaveUrl,
                success: function (data) {
                    ZoomMtg.join({
                        meetingNumber: payload.meetingNumber,
                        signature: signature,
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
        }

    }, [])

    return (
        <Fragment>
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.10.1/css/bootstrap.css" />
            <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.10.1/css/react-select.css" />
        </Fragment>
    )
}
export default Meeting;