import React from 'react';
import {Trans} from '@lingui/macro';

export default function formatDuration(seconds, i18n = null) {
  if(i18n !== null) {
    return formatDurationStr(seconds, i18n);
  }

  const timeParts = splitTimeIntoParts(seconds);

  if(timeParts.days > 2) {
    return <Trans id="timeperiod.format.days">{timeParts.totalDays} <small>days</small></Trans>
  } else if(timeParts.totalHours > 2) {
    return <Trans id="timeperiod.format.hours">{timeParts.totalHours}&nbsp;<small>hours</small></Trans>
  } else if(timeParts.totalMinutes > 2) {
    return <Trans id="timeperiod.format.minutes">{timeParts.totalMinutes}&nbsp;<small>mins</small></Trans>
  }

  return <Trans id="timeperiod.format.seconds">{timeParts.totalSeconds}<small>s</small></Trans>
}

export function formatDurationStr(seconds, i18n) {
  const timeParts = splitTimeIntoParts(seconds);

  if(timeParts.days > 2) {
    return i18n._('timeperiod.format.days.str', timeParts, {defaults: '{totalDays} days'})
  } else if(timeParts.totalHours > 2) {
    return i18n._('timeperiod.format.hours.str', timeParts, {defaults: '{totalHours} hours'})
  } else if(timeParts.totalMinutes > 2) {
    return i18n._('timeperiod.format.minutes.str', timeParts, {defaults: '{totalMinutes} mins'})
  }

  return i18n._('timeperiod.format.seconds.str', timeParts, {defaults: '{totalSeconds}s'})
}

function splitTimeIntoParts(time) {
  time = Math.round(time);
  let output = [];

  const seconds = time%60;

  const minutes = Math.floor((time % 3600)/60);

  const hours = Math.floor((time % 86400) / 3600);

  const days = Math.floor(time/86400);

  const totalSeconds = time;
  const totalMinutes = Math.floor(time / 60);
  const totalHours = Math.floor(time / 3600);
  const totalDays = days;

  return {seconds, minutes, hours, days, totalSeconds, totalMinutes, totalHours, totalDays};
}
