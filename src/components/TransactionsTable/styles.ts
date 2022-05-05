import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      position: relative;

      &:hover {
        .edit {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    .edit {
      width: 18px;
      position: absolute;
      right: 0;
      top: 0;
      background-color: transparent;
      opacity: 0;
      visibility: hidden;
      transition: opacity 250ms, visibility 250ms;
    }
  }
`;