import React from "react";
import PlusIcon from "../assets/plus-icon.svg";
import ChannelCard from "../components/ChannelCard";

export default {
  title: "ChannelCard",
  component: ChannelCard,
};

export const Group = () => (
  <ChannelCard
    title="Schmetterlings-Gruppe"
    imgSrc="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
);
export const News = () => (
  <ChannelCard
    title="News & Ankündigungen"
    imgSrc="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
);
export const Add = () => (
  <ChannelCard title="Neuer Channel" imgSrc={PlusIcon} />
);
