"use client";
import { useMakeCopilotActionable } from "@copilotkit/react-core";
import { useState } from "react";
import Markdown from "react-markdown";


export interface SlideModel {
  title: string;
  content: string;
  backgroundImageDescription: string;
  spokenNarration: string;
}

export interface SlideProps {
  slide: SlideModel;
  partialUpdateSlide: (partialSlide: Partial<SlideModel>) => void;
}


export const Slide = (props: SlideProps) => {
  const heightOfSpeakerNotes = 200;
  const backgroundImage =
    'url("https://source.unsplash.com/featured/?' +
    encodeURIComponent(props.slide.backgroundImageDescription) +
    '")';

    useMakeCopilotActionable({
      name: "updateSlide",
      description: "Update the current slide.",
      argumentAnnotations: [
        {
          name: "title",
          type: "string",
          description: "The title of the slide. Should be a few words long.",
          required: true,
        },
        {
          name: "content",
          type: "string",
          description:
            "The content of the slide. Should generally consits of a few bullet points.",
          required: true,
        },
        {
          name: "backgroundImageDescription",
          type: "string",
          description:
            "What to display in the background of the slide. For example, 'dog', 'house', etc.",
          required: true,
        },
        {
          name: "spokenNarration",
          type: "string",
          description:
            "The spoken narration for the slide. This is what the user will hear when the slide is shown.",
          required: true,
        },
      ],
      implementation: async (title, content, backgroundImageDescription, spokenNarration) => {
        props.partialUpdateSlide({
          title,
          content,
          backgroundImageDescription,
          spokenNarration,
        });
      },
    }, [props.partialUpdateSlide]);

  return (
    <>
    <div
      className="w-full relative"
      style={{
          height: `calc(100vh - ${heightOfSpeakerNotes}px)`,
      }}
    >
      <div
        className="background-image w-full -z-10 absolute"
        style={{
          pointerEvents: "none",
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${heightOfSpeakerNotes}px)`,
        }}
      />

      <div
        className="h-full w-full flex flex-col justify-center items-center text-5xl text-white p-10 text-center z-10"
        style={{
          textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
        }}
      >
        <textarea
          className="mt-16 text-7xl bg-white text-gray-400 p-4 text-center font-bold uppercase italic line-clamp-2 flex items-center"
          style={{
            border: "none",
            outline: "none",
          }}
          value={props.slide.title}
          placeholder="Title"
          onChange={(e) => {
            props.partialUpdateSlide({ title: e.target.value });
          }}
        />

        <textarea
          className="w-full h-full bg-transparent text-5xl text-black p-10 resize-none"
          style={{
            background: "none",
            border: "none",
            outline: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
          value={props.slide.content}
          placeholder="Body"
          onChange={(e) => {
            props.partialUpdateSlide({ content: e.target.value });
          }}
        />
      </div>
    </div>

      <textarea
          className="w-full h-full bg-transparent text-5xl p-10 resize-none bg-gray-500 pr-36"
          style={{
            height: `${heightOfSpeakerNotes}px`,
            background: "none",
            border: "none",
            outline: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
          value={props.slide.spokenNarration}
          onChange={(e) => {
            props.partialUpdateSlide({ spokenNarration: e.target.value });
          }}
        />
    </>
  );
};