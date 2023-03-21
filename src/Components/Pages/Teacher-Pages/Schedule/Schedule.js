import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { nanoid } from "nanoid";
import {
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import AddIcon from '@mui/icons-material/Add';
import "./custom.css";
import events from "./events";
import CustomModal from "./components/CustomModal";
import { Box } from "@mui/system";
import { styled, alpha } from '@mui/material/styles';
import styles from "../../../Layout/Style/ScheduleStyle";
import { Button, Card, Checkbox, Divider, FormControlLabel, FormLabel, Tab, Tabs, Typography } from "@mui/material";
import 'react-calendar/dist/Calendar.css';
import { orange } from '@mui/material/colors';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';





// search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));


// tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


let todayStr = new Date().toISOString().replace(/T.*$/, "");



export default function Schedule() {


  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const calendarRef = useRef(null);

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleCloseModal = () => {
    handleClose();
    setModal(false);
  };

  function handleDateClick(arg) {

  }
  function handleDateSelect(selectInfo) {
    if (
      selectInfo.view.type === "timeGridWeek" ||
      selectInfo.view.type === "timeGridDay"
    ) {
      selectInfo.view.calendar.unselect();
      setState({ selectInfo, state: "create" });
      console.log("open modal create");
      setStart(selectInfo.start);
      setEnd(selectInfo.end);
      setModal(true);
    }
  }
  function renderEventContent(eventInfo) {
    return (
      <div>
        <i
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {eventInfo.event.title}
        </i>
      </div>
    );
  }
  function handleEventClick(clickInfo) {
    setState({ clickInfo, state: "update" });
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setEnd(clickInfo.event.end);

    setModal(true);
  }
  function handleEvents(events) {
    setCurrentEvents(events);
  }
  function handleEventDrop(checkInfo) {
    setState({ checkInfo, state: "drop" });
    setConfirmModal(true);
  }
  function handleEventResize(checkInfo) {
    setState({ checkInfo, state: "resize" });
    setConfirmModal(true);
  }
  function handleEdit() {
    state.clickInfo.event.setStart(start);
    state.clickInfo.event.setEnd(end);
    state.clickInfo.event.mutate({
      standardProps: { title }
    });
    handleClose();
  }
  function handleSubmit() {
    const newEvent = {
      id: nanoid(),
      title,
      start: state.selectInfo?.startStr || start.toISOString(),
      end: state.selectInfo?.endStr || end.toISOString(),
      allDay: state.selectInfo?.allDay || false
    };

    let calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent(newEvent);
    handleClose();
  }
  function handleDelete() {
    state.clickInfo.event.remove();
    handleClose();
  }
  function handleClose() {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setState({});
    setModal(false);
  }
  const [state, setState] = useState({});

  // date
  const current = new Date();
  const b = current.toLocaleString('en-US', {
    month: 'long',
  });
  const Date1 = `${current.getDate()}  ${b}   ${current.getFullYear()}`;

  // tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.mainContainer}>

      <Box sx={styles.sub}>
        <Card sx={{ height: "auto", p: 2, boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)", backgroundSize: 'cover', backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-_nfAteCz39y3acSazyydc8nUBs5zzq7jAUyQPY1CsO7DgExYmWrBX04kED4qxPZZyg&usqp=CAU')",opacity:"0.8", backgroundRepeat: "no-repeat",marginBottom:"15px" }}>

          <Typography color="white" sx={{fontWeight:"bold",fontSize:"20px",p:1}}>{Date1}</Typography>
          <Typography color="white" sx={{fontSize:"12px",p:1}}>You have 5 notifications</Typography>

        </Card>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Schedule" {...a11yProps(0)} />
              <Tab label="Upcoming classes" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={styles.calHead}>
            <Box sx={styles.l50}>
              <Typography sx={styles.Text1}>Calender</Typography>
            </Box>
            <Box sx={styles.R50}>
              <Button
                sx={styles.Btn}
                color="primary"
                variant="contained"
                onClick={() => setModal(true)}
              >
                <AddIcon sx={{ mr: 1 }} />
                Create New Event
              </Button>
            </Box>
          </Box>
          <Divider />

          <div className="App" style={{ marginTop: "20px" }}>

            <Box sx={styles.mainB}>

              {/* l50 */}
              <Card sx={styles.L502}>
                <Box sx={{p:1}}>
                  <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>{Date1}</Typography>
                </Box>
                <Divider sx={{marginBottom:"7px"}}/>
                <Box sx={styles.LB1}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  <Box sx={styles.LB2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar />
                    </LocalizationProvider>
                  </Box>
                  <Divider />
                  <Box sx={styles.chkBox}>
                    <FormLabel component="legend">My calenders</FormLabel>
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Holiday"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="end"
                        control={<Checkbox sx={{
                          color: orange[800],
                          '&.Mui-checked': {
                            color: orange[600],
                          },
                        }} />}
                        label="Reminders"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="end"
                        control={<Checkbox sx={{
                          color: orange[800],
                          '&.Mui-checked': {
                            color: orange[600],
                          },
                        }} />}
                        label="Task"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </Box>
                  <Divider sx={{ p: 1 }} />
                  <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                    <Button fullWidth variant="contained">Add New Calendar</Button>
                  </Box>
                </Box>
              </Card>

              {/* R50 */}
              <Card sx={styles.R502}>
                <Col md={12}>
                  {/* Calender */}
                  <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                      left: "prev,today,next",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    buttonText={{
                      today: "current",
                      month: "month",
                      week: "week",
                      day: "day",
                      list: "list"
                    }}
                    initialView="timeGridWeek"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    //
                    initialEvents={[
                      {
                        id: nanoid(),
                        title: "All-day event",
                        start: todayStr
                      },
                      {
                        id: nanoid(),
                        title: "Timed event",
                        start: todayStr + "T12:00:00",
                        end: todayStr + "T12:30:00"
                      }
                    ]} // alternatively, use the `events` setting to fetch from a feed
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={() => handleEvents(events)}
                    eventDrop={handleEventDrop}
                    eventResize={handleEventResize}
                    //
                    dateClick={handleDateClick}
                    eventAdd={(e) => {
                      console.log("eventAdd", e);
                    }}
                    eventChange={(e) => {
                      console.log("eventChange", e);
                    }}
                    eventRemove={(e) => {
                      console.log("eventRemove", e);
                    }}
                  />



                </Col>
              </Card>
            </Box>


            {/* POP-up Form */}
            <CustomModal
              title={state.state === "update" ? "Update Event" : "Add Event"}
              isOpen={modal}
              toggle={handleCloseModal}
              onCancel={handleCloseModal}
              onSubmit={state.clickInfo ? handleEdit : handleSubmit}
              submitText={state.clickInfo ? "Update" : "Save"}
              onDelete={state.clickInfo && handleDelete}
              deleteText="Delete"
            >
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="with a placeholder"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">From - End</Label>
                <DateRangePicker
                  initialSettings={{
                    locale: {
                      format: "M/DD hh:mm A"
                    },
                    startDate: start,
                    endDate: end,
                    timePicker: true
                  }}
                  onApply={(event, picker) => {
                    setStart(new Date(picker.startDate));
                    setEnd(new Date(picker.endDate));
                  }}
                >
                  <input className="form-control" type="text" />
                </DateRangePicker>
              </FormGroup>
            </CustomModal>

            <CustomModal
              title={state.state === "resize" ? "Resize Event" : "Drop Event"}
              isOpen={confirmModal}
              toggle={() => {
                state.checkInfo.revert();
                setConfirmModal(false);
              }}
              onCancel={() => {
                state.checkInfo.revert();
                setConfirmModal(false);
              }}
              cancelText="Cancel"
              onSubmit={() => setConfirmModal(false)}
              submitText={"OK"}
            >
              Do you want to {state.state} this event?
            </CustomModal>
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
};