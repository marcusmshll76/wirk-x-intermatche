import react from 'react';

export const BaseIcon = ({ isActive, children, ...props }) => {
  props.fill = isActive ? '#8894FF' : '#A6B0C5';
  return <svg {...props}>{children}</svg>;
};

export const IconChart = (props) => (
  <BaseIcon width="15" height="15" viewBox="0 0 15 15" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.68474 5.92094V0.891732C8.68474 0.399245 9.08399 0 9.57648 0L9.59578 0.000208931C12.5661 0.0645184 14.9563 2.4711 14.9999 5.4439C15.0069 5.91841 14.6278 6.30872 14.1533 6.31567L14.1407 6.31577L9.07948 6.31567C8.86147 6.31567 8.68475 6.13894 8.68474 5.92094ZM11.9339 7.10527H7.89474L7.89474 2.93617C7.89474 2.19531 7.29415 1.59473 6.5533 1.59473C6.53878 1.59478 6.53878 1.59478 6.52427 1.59504C3.02139 1.67086 0 4.92111 0 8.45866C0 11.9755 3.0016 15 6.54135 15C10.1597 15 13.3549 12.0823 13.3549 8.57554V8.52632C13.3549 7.7415 12.7187 7.10527 11.9339 7.10527ZM1.57895 8.45865C1.57895 5.8457 3.78932 3.38713 6.31579 3.18591L6.31579 7.73685C6.31579 8.26007 6.73994 8.68422 7.26316 8.68422H11.7746C11.7073 11.2388 9.27932 13.4211 6.54135 13.4211C3.87633 13.4211 1.57895 11.1062 1.57895 8.45865ZM10.2637 4.73683V1.65677C11.8108 1.97084 13.0288 3.19015 13.3427 4.73683H10.2637Z"
    />
  </BaseIcon>
);

export const IconDocument = (props) => (
  <BaseIcon width="15" height="14" viewBox="0 0 15 14" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.8464 1.75H13.5C14.3284 1.75 15 2.42157 15 3.25V12.25C15 13.0784 14.3284 13.75 13.5 13.75H1.5C0.671573 13.75 0 13.0784 0 12.25V1.75C0 0.921573 0.671573 0.25 1.5 0.25H5.03574C5.23465 0.25 5.42542 0.329018 5.56607 0.46967L6.8464 1.75ZM4.72509 1.75001H1.50001V4.75001H13.5V3.25001H6.53575C6.33684 3.25001 6.14608 3.171 6.00542 3.03034L4.72509 1.75001ZM13.5 6.25001H1.50001V12.25H13.5V6.25001Z"
    />
  </BaseIcon>
);

export const IconMale = (props) => (
  <BaseIcon width="15" height="15" viewBox="0 0 15 15" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5ZM4.39914 10.9407L5.47334 10.3087C5.20614 10.0016 4.98161 9.64767 4.81984 9.28822C4.79826 9.24028 4.77685 9.18915 4.75574 9.13532C4.21125 8.89767 3.83524 8.3545 3.83524 7.72885V6.84118C3.83524 6.39164 4.05454 5.986 4.39972 5.73611C4.36197 4.87449 4.41449 4.50112 4.73675 4.08129C5.34014 3.29524 6.2764 2.72726 7.2567 2.72726C7.48699 2.72726 7.67994 2.79021 7.89256 2.90174C7.94197 2.92766 7.95888 2.93723 8.05837 2.99438L8.10851 3.0231C8.20139 3.07621 8.20609 3.0789 8.19056 3.08342C8.95708 2.86039 9.73379 3.39906 10.2575 4.08129C10.5787 4.49977 10.6246 4.86402 10.5745 5.71791C10.9345 5.96602 11.1648 6.38056 11.1648 6.84118V7.72885C11.1648 8.36695 10.774 8.91796 10.214 9.14818C10.1996 9.18372 10.1853 9.21808 10.1709 9.25106C10.0086 9.6234 9.78404 9.98768 9.51566 10.3022L10.6009 10.9407C11.0566 11.2088 11.3816 11.6412 11.5186 12.1376C12.8159 11.0124 13.6364 9.35203 13.6364 7.49999C13.6364 4.11097 10.889 1.36362 7.50001 1.36362C4.11099 1.36362 1.36365 4.11097 1.36365 7.49999C1.36365 9.35203 2.18413 11.0124 3.48143 12.1376C3.61845 11.6412 3.94346 11.2088 4.39914 10.9407ZM7.50002 13.6364C8.47969 13.6364 9.40573 13.4068 10.2273 12.9985L10.2273 12.6719C10.2273 12.4434 10.1064 12.2319 9.90939 12.116L8.76875 11.4449C8.3523 11.1999 8.09662 10.7528 8.09662 10.2696V10.0904C8.09662 9.90305 8.1737 9.72397 8.30976 9.59519C8.55807 9.3602 8.77718 9.03573 8.92088 8.70611C8.96097 8.61416 9.00433 8.49778 9.04517 8.3705C9.13006 8.1059 9.36703 7.91929 9.64416 7.89882C9.73194 7.89234 9.80116 7.81814 9.80116 7.72886V6.8412L9.74136 6.83036C9.40291 6.76902 9.16315 6.4652 9.18217 6.12176C9.18539 6.06371 9.18914 6.00402 9.19415 5.9298L9.20008 5.84295C9.24283 5.22221 9.22689 4.9782 9.17579 4.91163C8.97142 4.64538 8.59664 4.38546 8.57154 4.39276C8.12359 4.5231 7.82048 4.43036 7.37912 4.1768C7.29874 4.13063 7.28615 4.12351 7.25911 4.10933L7.25838 4.10895C7.22746 4.09272 7.22434 4.09109 7.24862 4.09093C6.74561 4.0942 6.18301 4.43671 5.81846 4.91163C5.75756 4.99097 5.73754 5.25209 5.77353 5.90551L5.77613 5.95283C5.78098 6.04215 5.78295 6.08018 5.78545 6.13353C5.80142 6.47489 5.56222 6.77535 5.22596 6.83629L5.19889 6.8412V7.72886C5.19889 7.8165 5.26572 7.8899 5.35142 7.89844C5.62508 7.9257 5.85556 8.11471 5.93589 8.37773C5.97846 8.5171 6.02321 8.6394 6.06335 8.72858C6.20718 9.04816 6.43064 9.36814 6.68323 9.6005C6.82357 9.72961 6.90343 9.91159 6.90343 10.1023V10.2696C6.90343 10.7528 6.64775 11.1999 6.2313 11.4449L5.09066 12.116C4.89369 12.2319 4.77275 12.4434 4.77275 12.6719V12.9985C5.59431 13.4068 6.52036 13.6364 7.50002 13.6364Z"
    />
  </BaseIcon>
);
