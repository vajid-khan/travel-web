import dayjs from "dayjs";
import dayjsUtils from "@date-io/dayjs";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {dateFormat} from "../../../utils/variable";
import {
    MuiPickersUtilsProvider,
    DateTimePicker as Picker,
} from '@material-ui/pickers';

const pickerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#dd3751',
		},
    },
});

class DateTimePicker extends React.Component {

    state = {
        date: dayjs().add(30, 'minutes').format(dateFormat),
        maxDay: dayjs().add(this.props.maxDays ,'days').format('YYYY-MM-DD'),
        minDay: dayjs().add(-this.props.minDays, 'days').format('YYYY-MM-DD'),
    }

    handleChange = (date) => {
        this.setState({
            date: dayjs(date).format(dateFormat),
        }, () => {
            this.props.change(this.state.date)
        })
    }

    render() {

        return (
            <ThemeProvider theme={pickerTheme}>
                <MuiPickersUtilsProvider utils={dayjsUtils}>
                    <Picker
                        id="date-picker-dialogg"
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                        }}
                        format={dateFormat}
                        showTodayButton={true}
                        value={this.state.date}
                        onChange={this.handleChange}
                        minDate={this.state.minDay}
                        maxDate={this.state.maxDay}
                    />
                </MuiPickersUtilsProvider>
            </ThemeProvider>

        )
        
    }
}

export default DateTimePicker;