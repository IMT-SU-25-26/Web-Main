import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
import UploadButton from "./UploadButton";
import { registerForPulseInternship } from "@/lib/service/pulse";

export default function PulseForm() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(1);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nim: "",
    emailUC: "",
    penjurusan: "",
    nomorWhatsApp: "",
    idLine: "",
    alasanMasukPulse: "",
    pilihanDivisi1: "",
    pilihanDivisi2: "",
    ktm: null,
    cv: null,
    suratKomitmen: null,
    portfolio: null,
  });

  // File Upload States
  const [ktmUrl, setKtmUrl] = useState<string>("");
  const [cvUrl, setCvUrl] = useState<string>("");
  const [suratKomitmenUrl, setSuratKomitmenUrl] = useState<string>("");
  const [portfolioUrl, setPortfolioUrl] = useState<string>("");

  // File Upload Public ID States
  const [ktmPublicId, setKtmPublicId] = useState<string>("");
  const [cvPublicId, setCvPublicId] = useState<string>("");
  const [suratKomitmenPublicId, setSuratKomitmenPublicId] = useState<string>("");
  const [portfolioPublicId, setPortfolioPublicId] = useState<string>("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  // File Upload Handlers
  const handleKtmUpload = (url: string, publicId?: string) => {
    setKtmUrl(url);
    setKtmPublicId(publicId || "");
  };

  const handleCvUpload = (url: string, publicId?: string) => {
    setCvUrl(url);
    setCvPublicId(publicId || "");
  };

  const handleSuratKomitmenUpload = (url: string, publicId?: string) => {
    setSuratKomitmenUrl(url);
    setSuratKomitmenPublicId(publicId || "");
  };

  const handlePortfolioUpload = (url: string, publicId?: string) => {
    setPortfolioUrl(url);
    setPortfolioPublicId(publicId || "");
  };

  const handleNext = () => {
    setSubmitError("");

    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    setSubmitError("");

    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    if (!ktmUrl || !cvUrl || !suratKomitmenUrl) {
      setSubmitError(
        "Please upload all required documents (KTM, CV, and Surat Komitmen) before submitting."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSubmit = new FormData();

      formDataToSubmit.append("name", formData.namaLengkap);
      formDataToSubmit.append("nim", formData.nim);
      formDataToSubmit.append("email", formData.emailUC);
      formDataToSubmit.append("major", formData.penjurusan);
      formDataToSubmit.append("phoneNumber", formData.nomorWhatsApp);
      formDataToSubmit.append("lineId", formData.idLine);
      formDataToSubmit.append("reason", formData.alasanMasukPulse);
      formDataToSubmit.append("firstChoice", formData.pilihanDivisi1);
      formDataToSubmit.append("secondChoice", formData.pilihanDivisi2);

      formDataToSubmit.append("idCard", ktmUrl);
      formDataToSubmit.append("cv", cvUrl);
      formDataToSubmit.append("commitmentLetter", suratKomitmenUrl);
      formDataToSubmit.append("portfolio", portfolioUrl);
      
      formDataToSubmit.append("idCardPublicId", ktmPublicId);
      formDataToSubmit.append("cvPublicId", cvPublicId);
      formDataToSubmit.append("commitmentLetterPublicId", suratKomitmenPublicId);
      formDataToSubmit.append("portfolioPublicId", portfolioPublicId);

      const result = await registerForPulseInternship(formDataToSubmit);

      if (result.success) {
        setSubmitMessage(result.message || "Registration successful!");
        setShowSuccessScreen(true);
        setFormData({
          namaLengkap: "",
          nim: "",
          emailUC: "",
          penjurusan: "",
          nomorWhatsApp: "",
          idLine: "",
          alasanMasukPulse: "",
          pilihanDivisi1: "",
          pilihanDivisi2: "",
          ktm: null,
          cv: null,
          suratKomitmen: null,
          portfolio: null,
        });
        setKtmUrl("");
        setCvUrl("");
        setSuratKomitmenUrl("");
        setPortfolioUrl("");
        
        // Reset public IDs
        setKtmPublicId("");
        setCvPublicId("");
        setSuratKomitmenPublicId("");
        setPortfolioPublicId("");
        setCurrentSection(1);
      } else {
        setSubmitError(
          result.error || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDone = () => {
    router.push("/");
  };

  if (showSuccessScreen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="rounded-xl bg-black/20 backdrop-blur-xs border-2 border-blue-900 shadow-xl w-full sm:w-[600px] md:w-[700px] lg:w-[800px] min-h-[600px] flex flex-col items-center justify-center">
          <h1 className="text-center text-black text-3xl font-bold p-6 pb-2 font-family-fredoka text-shadow-[1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]">
            REGISTRATION SUCCESSFUL!
          </h1>

          <div className="flex flex-col items-center p-6 space-y-6">
            <p className="text-center text-black text-xl font-family-poppins">
              Thank you for registering for the Pulse Program!
            </p>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/event/pulse/registration/qr.jpg"
                alt="Registration QR Code"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>

            <p className="text-center text-black text-lg font-family-poppins max-w-md">
              Please scan this QR code to join the WhatsApp Group. Good Luck!
            </p>

            <Button onClick={handleDone} className="px-8 py-3">
              Done
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="rounded-xl bg-black/20 backdrop-blur-xs border-2 border-blue-900 shadow-xl w-full sm:w-[600px] md:w-[700px] lg:w-[800px] min-h-[600px] flex flex-col">
        <h1 className="text-center text-black text-3xl font-bold p-6 pb-2 font-family-fredoka text-shadow-[1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]">
          REGISTRATION FORM
        </h1>

        {/* Success Message */}
        {submitMessage && (
          <div className="mx-4 mb-4 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-md text-center font-family-poppins">
            {submitMessage}
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mx-4 mb-4 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-md text-center font-family-poppins">
            {submitError}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`flex-1 flex flex-col ${
            isSubmitting ? "opacity-60 pointer-events-none" : ""
          }`}
        >
          <div className="flex-1 overflow-y-auto">
            {/* Section 1: Basic Information */}
            {currentSection === 1 && (
              <>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={formData.namaLengkap}
                    onChange={(e) =>
                      handleInputChange("namaLengkap", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white"
                    required
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    NIM
                  </label>
                  <input
                    type="text"
                    value={formData.nim}
                    onChange={(e) => handleInputChange("nim", e.target.value)}
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white"
                    required
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Email UC
                  </label>
                  <input
                    type="email"
                    value={formData.emailUC}
                    onChange={(e) =>
                      handleInputChange("emailUC", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white"
                    required
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Penjurusan
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center text-black font-family-poppins text-md">
                      <input
                        type="radio"
                        name="penjurusan"
                        value="FSD"
                        checked={formData.penjurusan === "FSD"}
                        onChange={(e) =>
                          handleInputChange("penjurusan", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      FSD (Full Stack Development)
                    </label>
                    <label className="flex items-center text-black font-family-poppins text-md">
                      <input
                        type="radio"
                        name="penjurusan"
                        value="AI"
                        checked={formData.penjurusan === "AI"}
                        onChange={(e) =>
                          handleInputChange("penjurusan", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      AI (Artificial Intelligence)
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Section 2: Contact Information */}
            {currentSection === 2 && (
              <>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.nomorWhatsApp}
                    onChange={(e) =>
                      handleInputChange("nomorWhatsApp", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white"
                    required
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    ID Line
                  </label>
                  <input
                    type="text"
                    value={formData.idLine}
                    onChange={(e) =>
                      handleInputChange("idLine", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white"
                    required
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Alasan Masuk Pulse
                  </label>
                  <textarea
                    value={formData.alasanMasukPulse}
                    onChange={(e) =>
                      handleInputChange("alasanMasukPulse", e.target.value)
                    }
                    className="w-full p-2 rounded-md bg-[#013249] border-2 border-[#2CFFFB] text-white h-32 resize-none"
                    required
                  />
                </div>
              </>
            )}

            {/* Section 3: Division Selection */}
            {currentSection === 3 && (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="p-4 w-full max-w-xl">
                  <label className="block text-black mb-2 font-family-poppins text-2xl">
                    Pilihan Divisi 1
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="Technology"
                        checked={formData.pilihanDivisi1 === "Technology"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Technology
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="PDD Dokum"
                        checked={formData.pilihanDivisi1 === "PDD Dokum"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      PDD Dokum
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="PDD Design"
                        checked={formData.pilihanDivisi1 === "PDD Design"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      PDD Design
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="External"
                        checked={formData.pilihanDivisi1 === "External"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      External
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="Social Activity"
                        checked={formData.pilihanDivisi1 === "Social Activity"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Social Activity
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi1"
                        value="Public Relation"
                        checked={formData.pilihanDivisi1 === "Public Relation"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi1", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Public Relation
                    </label>
                  </div>
                </div>
                <div className="p-4 w-full max-w-xl">
                  <label className="block text-black mb-2 font-family-poppins text-2xl  ">
                    Pilihan Divisi 2
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="Technology"
                        checked={formData.pilihanDivisi2 === "Technology"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Technology
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="PDD Dokum"
                        checked={formData.pilihanDivisi2 === "PDD Dokum"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      PDD Dokum
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="PDD Design"
                        checked={formData.pilihanDivisi2 === "PDD Design"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      PDD Design
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="External"
                        checked={formData.pilihanDivisi2 === "External"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      External
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="Social Activity"
                        checked={formData.pilihanDivisi2 === "Social Activity"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Social Activity
                    </label>
                    <label className="flex items-center text-black text-xl font-family-poppins">
                      <input
                        type="radio"
                        name="pilihanDivisi2"
                        value="Public Relation"
                        checked={formData.pilihanDivisi2 === "Public Relation"}
                        onChange={(e) =>
                          handleInputChange("pilihanDivisi2", e.target.value)
                        }
                        className="mr-2"
                        required
                      />
                      Public Relation
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: File Uploads */}
            {currentSection === 4 && (
              <>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Kartu Tanda Mahasiswa
                  </label>
                  <UploadButton
                    onUpload={handleKtmUpload}
                    label="KTM"
                    hasFile={!!ktmUrl}
                    folder="pulse/ktm"
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Curriculum Vitae (CV)
                  </label>
                  <UploadButton
                    onUpload={handleCvUpload}
                    label="CV"
                    hasFile={!!cvUrl}
                    folder="pulse/cv"
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Surat Komitmen
                  </label>
                  <UploadButton
                    onUpload={handleSuratKomitmenUpload}
                    label="Surat Komitmen"
                    hasFile={!!suratKomitmenUrl}
                    folder="pulse/surat-komitmen"
                  />
                </div>
                <div className="p-4">
                  <label className="block text-black mb-2 font-family-poppins text-xl">
                    Portfolio{" "}
                    <span className="text-gray-600 text-lg">(Optional)</span>
                  </label>
                  <UploadButton
                    onUpload={handlePortfolioUpload}
                    label="Portfolio"
                    hasFile={!!portfolioUrl}
                    folder="pulse/portfolio"
                  />
                </div>
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="p-4 flex justify-between mt-auto">
            {currentSection > 1 && (
              <Button
                onClick={handleBack}
                className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              >
                Back
              </Button>
            )}
            <div className="flex-1"></div>
            {currentSection < 4 ? (
              <Button
                onClick={handleNext}
                className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className={isSubmitting ? "opacity-75" : ""}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
