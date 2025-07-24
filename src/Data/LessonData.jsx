// src/Data/LessonData.js
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";


//LESSON COMPONENTS
import LessonFlashcards from "../Components/LessonComponents/LessonFlashcards";
import MultiChoice from "../Components/LessonComponents/MultiChoice";
import TableComponent from "../Components/LessonComponents/TableComponent";
import TapReveal from "../Components/LessonComponents/TapReveal";
import Translate from "../Components/LessonComponents/Translate";
import Unscramble from "../Components/LessonComponents/Unscramble";

/* Schema:
{
id: ,
title: "",
duration: ,
img:  "",
content: (<> </>),
recap: (<> </>),
vocabulary: (<> </>),
practice: (<> </>),
},
*/






export const lessonsData = [
  {
    id: 0,
    title: "COMPONENT TESTING",
    duration: 1,
    img: "",
    vocabulary: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Vocabulary</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>tha</strong>
              </TableCell>
              <TableCell>am/are/is</TableCell>
              <TableCell>th like H</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>mi</strong>
              </TableCell>
              <TableCell>I</TableCell>
              <TableCell>like “me”</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>beag</strong>
              </TableCell>
              <TableCell>small</TableCell>
              <TableCell>g like k; bird’s beak</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>mòr</strong>
              </TableCell>
              <TableCell>big</TableCell>
              <TableCell>long ò: moooooor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>thu</strong>
              </TableCell>
              <TableCell>you</TableCell>
              <TableCell>th silent; “thou”</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>sgìth</strong>
              </TableCell>
              <TableCell>tired</TableCell>
              <TableCell>sounds like ski</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>brònach</strong>
              </TableCell>
              <TableCell>sad</TableCell>
              <TableCell>ch as in loch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>toilichte</strong>
              </TableCell>
              <TableCell>happy</TableCell>
              <TableCell>ch further forward</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    ),
    content: (
      <>
        <Unscramble sentence="Tha mi mòr" />
        <TapReveal prompt="What is 'house' in Gaelic?" answer="taigh" />
        <TableComponent
          xHeaders={["Gaelic", "English"]}
          data={[
            ["tha", "am"],
            ["mi", "I"],
          ]}
        />
        <MultiChoice
          prompt="Translate 'big'"
          answer="mòr"
          wrongAnswers={["beag", "sgìth", "tha"]}
        />
        <LessonFlashcards lessonId={0} />
      </>
    ),
    recap: <> </>,
    practice: <> </>,
  },
  {
    id: 1,
    title: "Describing",
    duration: 15,
    img: "/images/lesson1.png",
    // Narrative content excluding vocab, recap, and practice
    content: (
      <Box sx={{ "& > * + *": { mt: 2 } }}>
        <Typography variant="h5">Lesson 1: Describing</Typography>

        {/* Keywords */}
        <Typography>Let’s start by learning four words:</Typography>
        <List>
          <ListItem>
            <Typography>
              <strong>is/am/are</strong> — tha
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>me</strong> — mi
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>big</strong> — mòr
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>little</strong> — beag
            </Typography>
          </ListItem>
        </List>

        {/* Word Order Explanation */}
        <Typography>
          Before forming sentences, note that Gaelic word order differs from
          English.
        </Typography>
        <Typography>
          <em>English: I am big</em>
        </Typography>
        <Typography>
          <em>Gaelic: Tha mi mòr</em>
        </Typography>

        {/* Word-for-Word Example */}
        <Typography>Literal, word-for-word translation:</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>English</strong>
              </TableCell>
              <TableCell>
                <strong>Gaelic</strong>
              </TableCell>
              <TableCell>
                <strong>Literal</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                I<br />
                am
                <br />
                big
              </TableCell>
              <TableCell>
                tha
                <br />
                mi
                <br />
                mòr
              </TableCell>
              <TableCell>
                am
                <br />I<br />
                big
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Additional Keywords */}
        <Typography>Next words:</Typography>
        <List>
          <ListItem>
            <Typography>
              <strong>you</strong> — thu
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>tired</strong> — sgìth
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>sad</strong> — brònach
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>happy</strong> — toilichte
            </Typography>
          </ListItem>
        </List>

        {/* Verb Simplicity Note */}
        <Typography>
          The verb <strong>tha</strong> stays the same for any subject—you
          simply replace the subject:
        </Typography>
        <Typography>
          <em>Tha mi mòr / Tha thu mòr</em>
        </Typography>
      </Box>
    ),
    // Recap rendered separately
    recap: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Recap</Typography>
        <List>
          <ListItem>Word order: verb‑subject‑adjective</ListItem>
          <ListItem>
            The verb <strong>tha</strong> does not change with subject
          </ListItem>
        </List>
      </Box>
    ),
    // Vocabulary rendered separately
    vocabulary: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Vocabulary</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>tha</strong>
              </TableCell>
              <TableCell>am/are/is</TableCell>
              <TableCell>th like H</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>mi</strong>
              </TableCell>
              <TableCell>I</TableCell>
              <TableCell>like “me”</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>beag</strong>
              </TableCell>
              <TableCell>small</TableCell>
              <TableCell>g like k; bird’s beak</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>mòr</strong>
              </TableCell>
              <TableCell>big</TableCell>
              <TableCell>long ò: moooooor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>thu</strong>
              </TableCell>
              <TableCell>you</TableCell>
              <TableCell>th silent; “thou”</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>sgìth</strong>
              </TableCell>
              <TableCell>tired</TableCell>
              <TableCell>sounds like ski</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>brònach</strong>
              </TableCell>
              <TableCell>sad</TableCell>
              <TableCell>ch as in loch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>toilichte</strong>
              </TableCell>
              <TableCell>happy</TableCell>
              <TableCell>ch further forward</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    ),
    // Practice rendered separately
    practice: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Practice</Typography>
        <List>
          <ListItem>
            Make 5 sentences using: tha, mi, thu, mòr, beag, sgìth, brònach,
            toilichte
          </ListItem>
          <ListItem>
            Unscramble: thu tha brònach; beag tha thu; mi toilichte tha; tha
            sgìth thu; mòr mi tha
          </ListItem>
          <ListItem>
            Translate Gaelic: Tha thu toilichte; Tha mi sgìth; Tha thu mòr
          </ListItem>
          <ListItem>
            Translate to Gaelic: I am small; You are sad; You are tired
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    id: 2,
    title: "Denying and Asking",
    duration: 12,
    img: "/images/lesson2.png",
    content: (
      <Box sx={{ "& > * + *": { mt: 2 } }}>
        <Typography variant="h5">Lesson 2: Denying and Asking</Typography>
        <Typography>
          In Lesson 1, we learned <strong>tha</strong>. Now we’ll make sentences
          negative or turn them into questions.
        </Typography>
        <Typography>
          <strong>Negative:</strong> <em>chan eil</em> — am not/are not/is not
        </Typography>
        <Typography>
          <strong>Questions:</strong> <em>a bheil?</em> — is/are…? &mdash;{" "}
          <em>nach eil?</em> — isn't/aren't…?
        </Typography>
        <Typography>Examples:</Typography>
        <List>
          <ListItem>Tha mi beag — I am small</ListItem>
          <ListItem>Chan eil mi beag — I am not small</ListItem>
          <ListItem>A bheil thu beag? — Are you small?</ListItem>
          <ListItem>Nach eil thu sgìth? — Aren't you tired?</ListItem>
        </List>

        <Typography>Verb forms chart:</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell>
                <strong>Statement</strong>
              </TableCell>
              <TableCell>
                <strong>Question</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Positive</strong>
              </TableCell>
              <TableCell>tha</TableCell>
              <TableCell>a bheil?</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Negative</strong>
              </TableCell>
              <TableCell>chan eil</TableCell>
              <TableCell>nach eil?</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography>New subjects:</Typography>
        <List>
          <ListItem>e (he) — eh</ListItem>
          <ListItem>i (she) — ee</ListItem>
          <ListItem>Calum — Calum</ListItem>
          <ListItem>Mòrag — Morag</ListItem>
        </List>
        <Typography>
          Swap them in: <em>Chan eil e blàth</em>, <em>A bheil i fuar?</em>,{" "}
          <em>Tha Calum blàth</em>, <em>Nach eil Mòrag fuar?</em>
        </Typography>
      </Box>
    ),
    recap: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Recap</Typography>
        <List>
          <ListItem>Positive: tha</ListItem>
          <ListItem>Negative: chan eil</ListItem>
          <ListItem>Question: a bheil?</ListItem>
          <ListItem>Neg Question: nach eil?</ListItem>
          <ListItem>Verb form stays the same</ListItem>
        </List>
      </Box>
    ),
    vocabulary: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Vocabulary</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>chan eil</TableCell>
              <TableCell>am not/are not/is not</TableCell>
              <TableCell>chan yel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>a bheil?</TableCell>
              <TableCell>is/are…?</TableCell>
              <TableCell>bh like v</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>nach eil?</TableCell>
              <TableCell>isn't/aren't…?</TableCell>
              <TableCell>nach = chan backwards</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>e</TableCell>
              <TableCell>he</TableCell>
              <TableCell>eh</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>i</TableCell>
              <TableCell>she</TableCell>
              <TableCell>ee</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Calum</TableCell>
              <TableCell>Calum</TableCell>
              <TableCell>name</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mòrag</TableCell>
              <TableCell>Morag</TableCell>
              <TableCell>long ò, g as k</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>blàth</TableCell>
              <TableCell>warm</TableCell>
              <TableCell>blaaah</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>fuar</TableCell>
              <TableCell>cold</TableCell>
              <TableCell>shivering</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    ),
    practice: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Practice</Typography>
        <List>
          <ListItem>
            Flip positive ↔ negative and statements ↔ questions
          </ListItem>
          <ListItem>Punctuate sentences correctly</ListItem>
          <ListItem>Translate to/from Gaelic exercises</ListItem>
        </List>
      </Box>
    ),
  },
  {
    id: 3,
    title: "Verbs",
    duration: 12,
    img: "/images/lesson3.png",
    content: (
      <Box sx={{ "& > * + *": { mt: 2 } }}>
        <Typography variant="h5">Lesson 3: Verbs</Typography>
        <Typography>
          Gaelic "-ing" forms use <strong>a’</strong> (before consonants) or{" "}
          <strong>ag</strong> (before vowels) + verbal noun: a’ sgrìobhadh, ag
          òl, etc.
        </Typography>
        <Typography>g → apostrophe rule: similar to English a/an.</Typography>
        <Typography>
          Examples: <em>Tha mi sgìth</em> → <em>Tha mi a’ sgrìobhadh</em>
        </Typography>
        <Typography>Word-for-word:</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell>
                <strong>English</strong>
              </TableCell>
              <TableCell>
                <strong>Gaelic</strong>
              </TableCell>
              <TableCell>
                <strong>Literal</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell>I am reading</TableCell>
              <TableCell>tha mi a’ leughadh</TableCell>
              <TableCell>am I at reading</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography>
          More verbs & pronouns: a’ tuigsinn, a’ bruidhinn, ag èisteachd, sinn,
          sibh, iad.
        </Typography>
      </Box>
    ),
    recap: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Recap</Typography>
        <List>
          <ListItem>a’ before consonants, ag before vowels</ListItem>
          <ListItem>g becomes ’ before consonants</ListItem>
          <ListItem>Literal “at doing” meaning</ListItem>
        </List>
      </Box>
    ),
    vocabulary: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Vocabulary</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>a’ sgrìobhadh</TableCell>
              <TableCell>writing</TableCell>
              <TableCell>g→'; bh like v</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>a’ leughadh</TableCell>
              <TableCell>reading</TableCell>
              <TableCell>gh like v</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ag òl</TableCell>
              <TableCell>drinking</TableCell>
              <TableCell>long ò</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ag ithe</TableCell>
              <TableCell>eating</TableCell>
              <TableCell>th as ch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ag èisteachd</TableCell>
              <TableCell>listening</TableCell>
              <TableCell>chd like Loch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>a’ bruidhinn</TableCell>
              <TableCell>speaking</TableCell>
              <TableCell>dh silent</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sinn</TableCell>
              <TableCell>we</TableCell>
              <TableCell>Sinn Fein</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sibh</TableCell>
              <TableCell>you (pl.)</TableCell>
              <TableCell>shiv/shoo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>iad</TableCell>
              <TableCell>they</TableCell>
              <TableCell>d like t</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    ),
    practice: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Practice</Typography>
        <List>
          <ListItem>Unscramble verb/pronoun sentences</ListItem>
          <ListItem>Fill in blanks with correct a'/ag forms</ListItem>
          <ListItem>Swap adjectives and verbs exercises</ListItem>
        </List>
      </Box>
    ),
  },
  {
    id: 4,
    title: "Living in the Past",
    duration: 12,
    img: "/images/lesson4.png",
    content: (
      <Box sx={{ "& > * + *": { mt: 2 } }}>
        <Typography variant="h5">Lesson 4: Living in the Past</Typography>
        <Typography>
          We learned present forms:{" "}
          <em>tha / a bheil? / chan eil / nach eil?</em> Now past forms:
        </Typography>
        <Typography>
          <strong>Positive:</strong> bha — was/were
        </Typography>
        <Typography>
          <strong>Question:</strong> an robh? — was/were…?
        </Typography>
        <Typography>
          <strong>Negative:</strong> cha robh — wasn't / weren't
        </Typography>
        <Typography>
          <strong>Neg Question:</strong> nach robh? — wasn't/weren't…?
        </Typography>
        <Typography>
          These forms never change with subject. Swap them into any structure:
        </Typography>
        <List>
          <ListItem>
            <em>Tha mi a’ tuigsinn</em> → <em>Bha mi a’ tuigsinn</em>
          </ListItem>
          <ListItem>
            <em>Cha robh sinn a’ caidil</em> — We weren’t sleeping
          </ListItem>
        </List>

        {/* New Verbs & Words */}
        <Typography>New words:</Typography>
        <List>
          <ListItem>
            <Typography>
              <strong>a’ cadal</strong> — sleeping
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>a’ smaoineachadh</strong> — thinking
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>rudeigin</strong> — something
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>seo</strong> — this
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>sin</strong> — that
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>agus</strong> — and
            </Typography>
          </ListItem>
        </List>
        <Typography>
          Use them: <em>Tha rudeigin fuar</em>; <em>Cha robh seo blàth</em>;{" "}
          <em>Bha sin brònach</em>.
        </Typography>
      </Box>
    ),
    recap: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Recap</Typography>
        <List>
          <ListItem>Positive past: bha</ListItem>
          <ListItem>Past question: an robh?</ListItem>
          <ListItem>Negative past: cha robh</ListItem>
          <ListItem>Neg past question: nach robh?</ListItem>
        </List>
      </Box>
    ),
    vocabulary: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Vocabulary</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>bha</TableCell>
              <TableCell>was/were</TableCell>
              <TableCell>bh like v</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>cha robh</TableCell>
              <TableCell>wasn't/weren't</TableCell>
              <TableCell>silent bh</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>an robh?</TableCell>
              <TableCell>was…?</TableCell>
              <TableCell>ro sound</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>nach robh?</TableCell>
              <TableCell>wasn't…?</TableCell>
              <TableCell>ro sound</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>a’ cadal</TableCell>
              <TableCell>sleeping</TableCell>
              <TableCell>d like j</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>a’ smaoineachadh</TableCell>
              <TableCell>thinking</TableCell>
              <TableCell>long vowel ao</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>rudeigin</TableCell>
              <TableCell>something</TableCell>
              <TableCell>hard d, g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>seo</TableCell>
              <TableCell>this</TableCell>
              <TableCell>show</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sin</TableCell>
              <TableCell>that</TableCell>
              <TableCell>shin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>agus</TableCell>
              <TableCell>and</TableCell>
              <TableCell>and</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    ),
    practice: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Practice</Typography>
        <List>
          <ListItem>Convert present ↔ past sentences</ListItem>
          <ListItem>Make past-tense sentences with given words</ListItem>
          <ListItem>
            Translate to Gaelic: This wasn’t cold; They weren’t listening; Was
            this warm?
          </ListItem>
        </List>
      </Box>
    ),
  },
  // More lessons (5)…
];
