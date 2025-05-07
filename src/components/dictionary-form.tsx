import { useRef } from "react";
import { Volume2 } from "lucide-react";
import { DictionaryType } from "@/types/dictionaty.type";

type DictionaryFormProps = {
  dictionaryData: DictionaryType | null;
};

export function DictionaryForm(props: DictionaryFormProps) {
  const { dictionaryData } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return dictionaryData ? (
    <div className="max-w-3xl p-6 bg-white space-y-6">
      <div className="text-xl font-semibold text-gray-800">
        Definitions for:{" "}
        <span className="text-blue-600 italic">{dictionaryData.word}</span>
      </div>

      {dictionaryData.phonetics.map((p, i) => {
        return p.audio && p.text ? (
          <div key={i} className="flex items-center space-x-2 text-gray-600">
            <span>{p.text}</span>
            {p.audio && (
              <>
                <button
                  onClick={() => audioRef.current?.play()}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <audio ref={audioRef} src={p.audio} preload="auto" />
              </>
            )}
          </div>
        ) : null;
      })}

      {dictionaryData.origin && (
        <div className="text-sm text-gray-500">
          Origin: {dictionaryData.origin}
        </div>
      )}

      <div className="space-y-6">
        {dictionaryData.meanings.map((data, index) => (
          <div key={data.partOfSpeech} className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-gray-700">
                {index + 1}.{" "}
                <span className="capitalize">{data.partOfSpeech}</span>
              </div>
            </div>

            <div className="mt-2 space-y-4">
              {data.definitions.map((def, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">
                    <span className="font-semibold">Definition:</span>{" "}
                    {def.definition}
                  </p>
                  {def.example && (
                    <p className="text-gray-600 italic mt-1">“{def.example}”</p>
                  )}
                  {def.synonyms && def.synonyms.length > 0 && (
                    <p className="mt-2 text-sm text-green-600">
                      <span className="font-semibold">Synonyms:</span>{" "}
                      {def.synonyms.join(", ")}
                    </p>
                  )}
                  {def.antonyms && def.antonyms.length > 0 && (
                    <p className="text-sm text-red-600">
                      <span className="font-semibold">Antonyms:</span>{" "}
                      {def.antonyms.join(", ")}
                    </p>
                  )}
                </div>
              ))}
              {data.synonyms && data.synonyms.length > 0 && (
                <p className="mt-2">
                  <span className="font-semibold">Synonyms:</span>{" "}
                  <span className="text-sm text-green-600">
                    {data.synonyms.join(", ")}
                  </span>
                </p>
              )}
              {data.antonyms && data.antonyms.length > 0 && (
                <p className="">
                  <span className="font-semibold">Antonyms:</span>{" "}
                  <span className="text-sm text-red-600">
                    {data.antonyms.join(", ")}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
