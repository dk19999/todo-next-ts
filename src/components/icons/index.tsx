export const DeleteIcon = (props: {
  height: string;
  width: string;
  onClick: () => void;
  className: string;
}) => {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 20 20'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      data-darkreader-inline-stroke=''
      // style='--darkreader-inline-stroke:currentColor; --darkreader-inline-fill:currentColor;'
      data-darkreader-inline-fill=''
    >
      <path
        fill-rule='evenodd'
        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
        clip-rule='evenodd'
      ></path>
    </svg>
  );
};
