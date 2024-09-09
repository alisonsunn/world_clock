import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import City from './City';
import Time from './Time';
import Pointer from './Pointer';
import Center from './Center';
import Core from './Core';

const StyledClock = styled.div`
  width: ${props => props.width || '200px'};
  aspect-ratio: 1/1;
  background-color: ${({ $light, theme }) => $light ? theme.clockBackground.light : theme.clockBackground.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.dark};
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`

function Clock(props) {

  const { city, timeZone } = props;

  const [light, setLight] = useState(false);

  const [year, setYear] = React.useState()
  const [month, setMonth] = React.useState()
  const [day, setDay] = React.useState()

  const [hour, setHour] = React.useState()
  const [minute, setMinute] = React.useState()
  const [second, setSecond] = React.useState()

  const [hourDeg, setHourDeg] = React.useState(10)
  const [minuteDeg, setMinuteDeg] = React.useState(45)
  const [secondDeg, setSecondDeg] = React.useState(90)

  const unitDeg = 360 / 60;
  const bigUnitDeg = 360 / 12;

  const setTime = () => {
    const currentTime = new Date()
    const offset = timeZone * 60 * 60 * 1000
    const timeWithOffset = new Date(currentTime.getTime() + offset)

    setYear(timeWithOffset.getUTCFullYear())
    setMonth(timeWithOffset.getUTCMonth() + 1)
    setDay(timeWithOffset.getUTCDate())
    setHour(timeWithOffset.getUTCHours())
    setMinute(timeWithOffset.getUTCMinutes())
    setSecond(timeWithOffset.getUTCSeconds())

    setSecondDeg(timeWithOffset.getUTCSeconds() * unitDeg);
    setMinuteDeg(timeWithOffset.getUTCMinutes() * unitDeg + timeWithOffset.getUTCSeconds() / 60 * unitDeg);
    setHourDeg((timeWithOffset.getUTCHours() + timeWithOffset.getUTCMinutes() / 60) * bigUnitDeg);
  }

  React.useEffect(() => {
    setTime()
    const interval = setInterval(() => {
      setTime()
    }, 200)
    return () => clearInterval(interval)
  }, []);

  React.useEffect(() => {
    (hour > 6 && hour < 18) ? setLight(true) : setLight(false)
  }, [hour, minute, second])


  return (
    <StyledClock width={"40rem"} $light={light} >
      <City $light={light} city={city} >{city}</City>
      <Pointer $light={light} >
        <Center $light={light}></Center>
        {/* hour */}
        <Core $light={light} $angle={hourDeg} $pointer_width={7} $block_size={100} $pointer_light="#848484" $pointer_dark="#ff6767" ></Core>
        {/* minute */}
        <Core $light={light} $angle={minuteDeg} $pointer_width={4} $block_size={120} $pointer_light="#848484" $pointer_dark="#fff"></Core>
        {/* second */}
        <Core $light={light} $angle={secondDeg} $pointer_width={2} $block_size={150}
        $pointer_light="#ff6767" $pointer_dark="#69c0ff" $tail={25}></Core>
      </Pointer>
      <Time $light={light} timezone={timeZone}>
        {year}-{month}-{day} {hour}:{minute}:{second}
      </Time>
    </StyledClock>
  )
}

export default Clock;